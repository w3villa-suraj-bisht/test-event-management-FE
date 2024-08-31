"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'
import Link from "next/link";
import { TiEdit } from "react-icons/ti";
import { MdOutlineDeleteOutline } from "react-icons/md";


const CreateCategory = () => {
    return (
        <div>

            <div>
                <div className="heading">
                    <div>
                        <h3 className="font-semibold text-xl">
                            Manage Category
                        </h3>
                    </div>
                </div>

                <div className="content mt-5 zoomIn">
                    <div style={{ maxWidth: "" }}>
                        <Table className="tableStyle">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>name</TableHead>
                                    <TableHead className="w-[150px] text-center">Length</TableHead>
                                    <TableHead className="w-[150px] text-center">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow >
                                    <TableCell>GK</TableCell>
                                    <TableCell className="text-center">20 Min</TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <Link className="btnLink_edit" href={""}  >
                                                <TiEdit />
                                            </Link>
                                            <Link className="btnLink_delete" href={""} >
                                                <MdOutlineDeleteOutline />
                                            </Link>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateCategory
