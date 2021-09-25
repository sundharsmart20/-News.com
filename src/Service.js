import axios from 'axios'

const EMPLOYEE_API_BASE_URL="https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";

const EMPLOYEE_API_BASE_URL1="https://saurav.tech/NewsAPI/top-headlines/category/science/in.json";

const EMPLOYEE_API_BASE_URL2="https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json";

const EMPLOYEE_API_BASE_URL3="https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json";

const EMPLOYEE_API_BASE_URL4="https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";


class Service{
	getEmployees()
	{
		return axios.get(EMPLOYEE_API_BASE_URL);
	}

	getScience()
	{
		return axios.get(EMPLOYEE_API_BASE_URL1);
	}

	getEntertainment()
	{
		return axios.get(EMPLOYEE_API_BASE_URL2);
	}

	getSports()
	{
		return axios.get(EMPLOYEE_API_BASE_URL3);
	}

	getGeneral()
	{
		return axios.get(EMPLOYEE_API_BASE_URL4);
	}

	// createEmployee(employeeDetail)
	// {
	// 	return axios.post(EMPLOYEE_API_BASE_URL, employeeDetail);
	// }

	// deleteEmployee(employeeId)
	// {
	// 	return axios.delete(EMPLOYEE_API_BASE_URL+'/'+ employeeId);
	// }

	// getEmployeeById(employeeId)
	// {
	// 	return axios.get(EMPLOYEE_API_BASE_URL+'/'+ employeeId);
	// }
	// updateEmployee(employeeId,employee)
	// {
	// 	return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
	// }
}
export default new Service();