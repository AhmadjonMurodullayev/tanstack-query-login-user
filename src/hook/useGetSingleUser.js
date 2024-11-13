import { useQueries } from "@tanstack/react-query";
import React from "react";
import { request } from "../config/request";
import { toast } from "react-toastify";

export const useGetSingleUser = () => {
  return (
    useQueries({
      queryKey: ["qarz",id],
      queryFn: () => request.get(`/clent/${id}`).then((res) => res.data),
      onSuccess: (data) => {
        toast.success(data.message);
      },
    })
  )
};
