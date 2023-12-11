import { peopleData } from "./data";
import { Table } from "./design-system/table/Table";
const flattenPeopleData = (data) => {
    return data.map((item) => {
        const finance = { ...item.finance };
        const person = {
            firstName: item.firstName,
            lastname: item.lastname,
            profession: item.profession,
            ...finance
        };
        return person;
    });
};

export const FinanceData = () => {
    return (
        <Table
            columnNames={[
                "First Name",
                "Last Name",
                "Age",
                "Profession",
                "Salary",
                "Expenses",
                "Credit Score"
            ]}
            data={flattenPeopleData(peopleData)}
        />
    );
};
