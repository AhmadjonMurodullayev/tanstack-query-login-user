import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";
import { client } from "../config/query-clinet";

export const useCreateClients = () => {
  return useMutation({
    mutationFn: (data) => request.post("/clent", data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["clent"]);
    },
  });
};
