import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Pagination } from '../../components/Pagination/Pagination';
import { Dialog } from '../../components/Dialog/Dialog';
import { EmployeeDetailView } from '../EmployeeDetailView/EmployeeDetailView';
import logo from '../../logo.svg'
import '../../styles/App.css';
import { fetchEmployeeList, employeeSearch } from '../../actions/empSummaryActions';

function SummaryView() {
  const employees = useSelector(state => state.empReducer.empSummary)
  const [empDetails, setEmpDetails] = useState({})
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const dataPerPage = 5;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const [listOfEmp, setListOfEmp] = useState(employees?.slice(firstIndex, lastIndex))
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if(searchText === '') {
    dispatch(fetchEmployeeList());
  }
    setListOfEmp(employees?.slice(firstIndex, lastIndex))
  }, [employees])


  useEffect(() => {
    setListOfEmp(employees?.slice(firstIndex, lastIndex))
  }, [lastIndex]);

  const handlePageClick = (e) => {
    return setCurrentPage(Number(e))
  }

  const openDialog = (empDetails) => {
    setIsDialogOpen(true);
    setEmpDetails(empDetails)
  }
  const closeDialog = () => setIsDialogOpen(false);

  const getPages = () => {
    const pages = []
    for (let i = 1; i <= Math.ceil(employees?.length / dataPerPage); i++) {
      pages.push(i)
    }
    return pages;
  }

  const PageHeader = () => {
    const companyInfo = useSelector(state => state.empReducer.companyInfo);
    const { companyName, companyMotto, companyEst } = companyInfo
    return (
      <>
        <h1>{companyName}</h1>
        <div className='sub-header'>
          <h3>{companyMotto}</h3>
          <h3>Since {companyEst?.split("T")[0]?.split("-")?.reverse().join('-')}</h3>
        </div>
        <hr />
      </>
    )
  }

  const EmployeeTable = () => {
    const tableHeader = ['Id', 'Name', 'Contact No', 'Address']
    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map(item => <th key={item}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {listOfEmp?.length > 0 ? listOfEmp.map(item => {
            const { id, firstName, lastName, contactNo, address } = item
            return (
              <tr key={id}>
                <td><a href='#' onClick={() => openDialog(item)} >{id}</a></td>
                <td>
                  <div className='header'>
                    <img className='img' src={logo} alt='pic' />
                    <div style={{ paddingTop: 15 }}>{`${firstName} ${lastName}`}</div>
                  </div>
                </td>
                <td>{contactNo}</td>
                <td>{address}</td>
              </tr>
            )
          }) : <tr>No Records Found</tr> }
        </tbody>
      </table>
    )
  }

  const TablePagination = () => {
    return (
      <Pagination pages={getPages()} handleClick={e => handlePageClick(e)} currentPage={currentPage} />
    )
  }

  const handleEmpSearch = (value) => {
    dispatch(employeeSearch(value))
    setSearchText(value)
  }

  return (
    <>
      {isDialogOpen && <Dialog isDialogOpen={isDialogOpen} closeDialog={closeDialog} child={<EmployeeDetailView empDetails={empDetails} />} />}
      <PageHeader />
      <div className='sub-header'>
        <div style={{ marginTop: '15px' }}>{`Showing ${listOfEmp?.length} of ${employees?.length}`}</div>
        <SearchBox handleSearch={(val) => handleEmpSearch(val)} />
      </div>
      <EmployeeTable />
      <TablePagination />
    </>
  );
}

export default SummaryView;
