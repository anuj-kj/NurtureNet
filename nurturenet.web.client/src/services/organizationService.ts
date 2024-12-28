import { getData, postData, putData, deleteData } from '../api/apiService';
import { Organization } from '../models/Organization ';

const ORGANIZATIONS_ENDPOINT = '/organization';

export const getOrganizations = async (): Promise<Organization[]> => {
    return await getData(ORGANIZATIONS_ENDPOINT);
};

export const createOrganization = async (organization: Organization): Promise<Organization> => {
    return await postData(ORGANIZATIONS_ENDPOINT, organization);
};

export const updateOrganization = async (organization: Organization): Promise<Organization> => {
    return await putData(`${ORGANIZATIONS_ENDPOINT}/${organization.id}`, organization);
};

export const deleteOrganization = async (id: string): Promise<void> => {
    await deleteData(`${ORGANIZATIONS_ENDPOINT}/${id}`);
};