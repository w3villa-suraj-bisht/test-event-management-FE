"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'
import Link from "next/link";
import { TiEdit } from "react-icons/ti";
import { MdOutlineDeleteOutline } from "react-icons/md";


const ReviewResult = () => {
    return (
        <div>

            <div>
                <div className="heading">
                    <div>
                        <h3 className="font-semibold text-xl">
                            Manage review result
                        </h3>
                    </div>
                </div>

                <div className="content mt-5 zoomIn">
                    <div style={{ maxWidth: "" }}>
                        <Table className="tableStyle">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="w-[150px] text-center">Score</TableHead>
                                    <TableHead className="w-[150px] text-center">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow >
                                    <TableCell>Arvind</TableCell>
                                    <TableCell>arvind@t.com</TableCell>
                                    <TableCell>Pass</TableCell>
                                    <TableCell className="text-center">7/10</TableCell>
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
                                <TableRow >
                                    <TableCell>brijesh</TableCell>
                                    <TableCell>brijesh@gmail.com</TableCell>
                                    <TableCell>Pass</TableCell>
                                    <TableCell className="text-center">10/15</TableCell>
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
                                <TableRow >
                                    <TableCell>username</TableCell>
                                    <TableCell>username@t.com</TableCell>
                                    <TableCell>Pass</TableCell>
                                    <TableCell className="text-center">6/10</TableCell>
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
                                <TableRow >
                                    <TableCell>jonn</TableCell>
                                    <TableCell>jonn@jon.com</TableCell>
                                    <TableCell>Fail</TableCell>
                                    <TableCell className="text-center">4/20</TableCell>
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

export default ReviewResult