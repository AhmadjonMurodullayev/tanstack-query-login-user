// import { useMutation } from "@tanstack/react-query";
// import { request } from "../config/request";
// import { client } from "../config/query-clinet";

// export const useQarzPost = () => {
//   return useMutation({
//     mutationFn: (data) => request.post(`/clent/${data.clientId}`, data),
//     onSuccess: () => {
//       client.invalidateQueries(["clent"]);
//     },
//   });
// };
