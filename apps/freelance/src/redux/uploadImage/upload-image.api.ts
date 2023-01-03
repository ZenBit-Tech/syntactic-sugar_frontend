import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";

interface IFileUpload {
	file: string;
}

interface IFile {
	file: FileList;
}

export const uploadImage = createApi({
	reducerPath: "uploadImage",
	baseQuery: baseQuery,
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
