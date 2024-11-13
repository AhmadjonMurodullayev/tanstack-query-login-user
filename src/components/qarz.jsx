import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from "@tanstack/react-query";
import { request } from '../config/request';
import { client } from '../config/query-clinet';
import { useGetClients } from '../hook/useGetuser';

const useCreateClientLoan = () => {
  return useMutation({
    mutationFn: (data) => request.post(`/clent/${data.clientId}/qarz`, data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["clent"] }); 
    },
  });
};

export default function Qarz() {
  const { handleSubmit, reset, register } = useForm();
  const [selectedClient, setSelectedClient] = useState("");
  const { data: clients, isLoading } = useGetClients();
  const { mutate: createLoan } = useCreateClientLoan();

  const submit = (data) => {
    if (selectedClient) {
      createLoan({ ...data, clientId: selectedClient });
      reset();
    } else {
      alert("Please select a client.");
    }
    console.log(data);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <select 
          value={selectedClient} 
          onChange={(e) => setSelectedClient(e.target.value)} 
          required
        >
          <option value="">Select Client</option>
          {isLoading ? (
            <option>Loading clients...</option>
          ) : (
            clients?.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))
          )}
        </select>
        <input 
          type="text" 
          placeholder="Beriladigan summa" 
          {...register("amount", { required: true })} 
        />
        <button type="submit">Add Loan</button>
      </form>
    </div>
  );
}
