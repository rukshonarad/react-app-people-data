import "./index.css";
import { peopleData } from "./Data";
const TableRow = ({
    firstName,
    lastName,
    age,
    profession,
    yearlySalary,
    yearlyTotalExpenses,
    creditScore,
    yearlySaving,
    averageMonthlyExpense
}) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{profession}</td>
            <td>{age}</td>
            <td>{yearlySalary}</td>
            <td>{yearlyTotalExpenses}</td>
            <td>{creditScore}</td>
            <td>{yearlySaving}</td>
            <td>{averageMonthlyExpense}</td>
        </tr>
    );
};

function App() {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Profession</th>
                    <th>Yearly Salary</th>
                    <th>Yearly Expenses</th>
                    <th>Credit Score</th>
                    <th>Yearly Saving</th>
                    <th>Average Monthly Expense</th>
                </tr>
            </thead>
            <tbody>
                {peopleData.map((person, idx) => {
                    return (
                        <TableRow
                            key={idx}
                            firstName={person.firstName}
                            lastName={person.lastName}
                            age={person.age}
                            profession={person.profession}
                            yearlySalary={person.finance.yearlySalary}
                            yearlyTotalExpenses={
                                person.finance.yearlyTotalExpenses
                            }
                            creditScore={person.finance.creditScore}
                            yearlySaving={
                                person.finance.yearlySalary -
                                person.finance.yearlyTotalExpenses
                            }
                            averageMonthlyExpense={
                                person.finance.yearlyTotalExpenses / 12
                            }
                        />
                    );
                })}
            </tbody>
        </table>
    );
}

export default App;
