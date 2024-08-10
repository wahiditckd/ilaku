import axios from "axios"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// fungsi component css custom
export function cn(...inputs) {
	return twMerge(clsx(inputs))
}

// fungsi header token
const config = {
    headers: {
        'Authorization': 'Bearer ' + process.env.KEY_API
    }
}

// get data tanpa token
export async function getData(url) {
	try {
        const response = await axios.get(`${process.env.API_URL}${url}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// post/create data tanpa token
export async function postData(url, data) {
	try {
        const response = await axios.post(`${process.env.API_URL}${url}`, 
			data,
		);
        return response.data;
    } catch (error) {
        throw error;
    }
}

//get Data dengan token 
export async function getDataToken(url, token) {
	try {
        const response = await axios.get(`${process.env.API_URL}${url}`, 
			{
				headers: {
					'Authorization': 'Bearer ' + token
				}
			}
		);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// put/edit data dengan token
export async function putDataToken(url, token, data) {
	try {
        const response = await axios.put(`${process.env.API_URL}${url}`, 
			data,
			{
				headers: {
					'Authorization': 'Bearer ' + token
				}
			}
		);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// post/create data dengan token
export async function postDataToken(url, token, data) {
	try {
        const response = await axios.post(`${process.env.API_URL}${url}`, 
			data,
			{
				headers: {
					'Authorization': 'Bearer ' + token
				}
			}
		);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// delete data dengan token
export async function deleteDataToken(url, token) {
	try {
        const response = await axios.delete(`${process.env.API_URL}${url}`, 
			{
				headers: {
					'Authorization': 'Bearer ' + token
				}
			}
		);
        return response.data;
    } catch (error) {
        throw error;
    }
}