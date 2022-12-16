import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "redux/store";

interface IFileUpload {
	file: string;
}

interface IFile {
	file: FileList;
}

export const uploadImage = createApi({
	reducerPath: "uploadImage",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	tagTypes: ["image"],
	endpoints: builder => ({
		uploadImage: builder.mutation<IFileUpload, IFile | any>({
			query: (body: IFile) => ({
				url: "files/image",
				method: "POST",
				body,
			}),
			invalidatesTags: ["image"],
		}),
	}),
});

export const { useUploadImageMutation } = uploadImage;
