import axiosInstance from './axiosInstance';

export const getData = async (endpoint: string) => {
    try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (endpoint: string, data: any) => {
    try {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const putData = async (endpoint: string, data: any) => {
    try {
        const response = await axiosInstance.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error putting data:', error);
        throw error;
    }
};

export const deleteData = async (endpoint: string) => {
    try {
        const response = await axiosInstance.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};