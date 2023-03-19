import { Tab, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const tablepro = () => {
    var pname=[{name:"Athul",age:10,place:"kollam"},
    {name:"sura",age:8,place:"ckdy"},
    {name:"johny",age:3,placve:"thommana"}
]
  return (
    <TableContainer>
        <table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>age</TableCell>
                    <TableCell>place</TableCell>
                </TableRow>
            </TableHead>
        </table>
    </TableContainer>
  )
}

export default tablepro
