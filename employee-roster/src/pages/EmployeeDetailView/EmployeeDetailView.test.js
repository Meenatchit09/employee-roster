import { render, screen } from '@testing-library/react';
import { EmployeeDetailView } from './EmployeeDetailView';

const empDetails = {
    "id": "b569201a-d1fc-4d0d-88e7-9c46246f5a95",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg",
    "firstName": "Sam",
    "lastName": "Hessel",
    "jobTitle": "Central Paradigm Technician",
    "contactNo": "0423 765 538",
    "address": "Bartell Island North Amyhaven, Queensland",
    "age": 37,
    "bio": "Officia sit consectetur aut placeat ex a aut cumque eligendi. Alias est aut ratione ab veritatis. Molestiae quae enim atque amet. Maiores quia est est.",
    "dateJoined": "2022-03-08T09:21:49.809Z"
}

test('renders employee details correctly', () => {
    render(<EmployeeDetailView empDetails={empDetails} />);
    const age = screen.getByText(37);
    const jobTitle = screen.getByText("Central Paradigm Technician");
    expect(age).toBeInTheDocument();
    expect(jobTitle).toBeInTheDocument();
  });
  

