import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablenew = () => {
 
    var pname=[{name:"Athul",age:10,place:"kollam"},
    {name:"sura",age:8,place:"ckdy"},
    {name:"johny",age:3,place:"thommana"}
]
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pname.map((value,index)=>{
                    return <TableRow>
                        <TableCell key={index}>{value.name}</TableCell>
                        <TableCell key={index}>{value.age}</TableCell>
                        <TableCell key={index}>{value.place}</TableCell>
                    </TableRow>
                })}
            </TableBody>
    </Table>
    </TableContainer>
  )
}

export default Tablenew
