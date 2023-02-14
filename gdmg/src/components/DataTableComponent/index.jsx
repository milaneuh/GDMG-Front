import React, { useEffect } from "react";
import { DataTable } from 'mantine-datatable';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch,IconPlus } from '@tabler/icons';

import { useState } from "react";
import { Group, Space, Text,TextInput,Button } from "@mantine/core";
import { mock } from "../../utils/resa";
import sortBy from 'lodash/sortBy';
import ExpandedRowComponent from "../ExpendedRowComponent";
import ResaService from "../../service/resa/ReservationService";

const PAGE_SIZES = [10, 15, 20];
function DataTableComponent() {
   const [data,setData] = useState([]);
    
    useEffect(() => {
        ResaService.getAllResa()
        .then((res) => {
          if(res !== undefined){
            setData(res);
          }else setData([])
        });
    },[])
    console.log(data);
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
        const [page, setPage] = useState(1);
    useEffect(() => {
      setPage(1);
    }, [pageSize]);
  
    const [records, setRecords] = useState(sortBy(data.slice(0, pageSize),'nom'));

    useEffect(() => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setRecords(data.slice(from, to));
    }, [page, pageSize]);

    const [query, setQuery] = useState('');
    const [veteransOnly, setVeteransOnly] = useState(false);
    const [debouncedQuery] = useDebouncedValue(query, 200);

    useEffect(() => {
        setRecords(
          data.filter(({ nom, date_debut, date_fin, state }) => {
            if (
              debouncedQuery !== '' &&
              !`${nom} ${date_debut} ${date_fin} ${state}`
                .toLowerCase()
                .includes(debouncedQuery.trim().toLowerCase())
            ) {
              return false;
            }
            return true;
          })
        );
      }, [debouncedQuery, veteransOnly]);


    return ( 
        <>
        <Space h='md'></Space>
        <Group>
        <TextInput
            sx={{ flexBasis: '60%' }}
            placeholder="Recherchez réservation ..."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
              <Button leftIcon={<IconPlus size={16}/>} color="blue">
            Créer réservation
        </Button>
        </Group>
            <Space h='md'></Space>

        <DataTable
        withBorder
        borderRadius="sm"
        withColumnBorders
        striped
        shadow={"sm"}
        highlightOnHover
        // provide data
        records={records}
        // define columns
        columns={[
            {
            accessor: 'id',
            // this column has a custom title
            title: '#',
            // right-align column
            textAlignment: 'right',
            },
            { accessor: 'date_debut' },
            { accessor: 'date_fin' },
            { accessor: 'nom' },
            
            {
            accessor: 'status',
            title :'Status',
            
            }


        ]}
        //Pagination
        totalRecords={data.length}
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
        
        //RowExpansion
        rowExpansion={{
            content: ({ record }) => (
                <ExpandedRowComponent children={record}/>
            )}}
    />

        </>
    );
}

export default DataTableComponent;