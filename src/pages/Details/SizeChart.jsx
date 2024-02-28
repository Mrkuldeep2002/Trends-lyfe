import { TableContainer, Table,
    TableCaption,
    Tbody,
    Td,
    Th,
    Thead,
    Tr, } from '@chakra-ui/react'
import React from 'react'

const SizeChart = () => {
  return (
    <TableContainer>
              <Table variant="striped">
                <TableCaption>Size Chart</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Brand Size</Th>
                    <Th>LENGTH</Th>
                    <Th>BREATH </Th>
                    <Th>CHEST </Th>
                    <Th>SLEEVE LENGTH </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>S</Td>
                    <Td>25</Td>
                    <Td>18</Td>
                    <Td>38</Td>
                    <Td>7</Td>
                  </Tr>
                  <Tr>
                    <Td>M</Td>
                    <Td>27</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>8</Td>
                  </Tr>
                  <Tr>
                    <Td>L</Td>
                    <Td>29</Td>
                    <Td>22</Td>
                    <Td>42</Td>
                    <Td>9</Td>
                  </Tr>
                  <Tr>
                    <Td>XL</Td>
                    <Td>31</Td>
                    <Td>24</Td>
                    <Td>44</Td>
                    <Td>10</Td>
                  </Tr>
                  <Tr>
                    <Td>XXL</Td>
                    <Td>32</Td>
                    <Td>26</Td>
                    <Td>46</Td>
                    <Td>11</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
  )
}

export default SizeChart
