import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { client } from "../config/query-clinet";

export const useDelete = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/clent/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["clent"]);
    },
  });
};
