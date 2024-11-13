import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { client } from "../config/query-clinet";

export const useEdit = () => {
  return useMutation({
    mutationFn: ({ id, data }) => request.put(`/clent/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["clent"]);
    },
  });
};
