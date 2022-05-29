import { AxiosRequestConfig, AxiosError } from "axios"
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { mainInstance } from "."

export const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = { baseUrl: '' }
    ): BaseQueryFn<
        {
            url: string
            method: AxiosRequestConfig['method']
            data?: AxiosRequestConfig['data']
        },
        unknown,
        unknown
    > =>
    async ({ url, method, data }) => {
        try {
            const result = await mainInstance({ url: baseUrl + url, method, data })
            return { data: result.data }
        } catch (axiosError) {
            let err = axiosError as AxiosError
            return {
                error: { status: err.response?.status, data: err.response?.data },
        }
    }
}