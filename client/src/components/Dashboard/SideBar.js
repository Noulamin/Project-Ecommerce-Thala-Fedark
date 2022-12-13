import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="assets/css/SideBarStyle.css"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossorigin="anonymous" />
                <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css" />
            </head>
            <div>
                <header>
                    <div class="side__bar p-0 d-flex flex-column justify-content-start">
                        <div class="logo d-flex flex-column justify-content-center align-items-center">
                            <a class="logo-1 my-4" href="">Logo</a>
                        </div>
                        <div>
                            <nav class="mt-0 mt-5">
                                <ul class="p-0">
                                    <li class="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <a title="Dashboard" href="/dash"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <p>Link</p>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li class="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <a title="" href="/articles"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <p>Link</p>
                                            <span>Articles</span>
                                        </a>
                                    </li>
                                    <li class="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <a title="Categories" href="/categories"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <p>Link</p>
                                            <span>Categories</span>
                                        </a>
                                    </li>
                                    <li class="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <a title="Comments" href="/comments"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <p>Link</p>
                                            <span>Comments</span>
                                        </a>
                                    </li>
                                    <li class="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <a title="Settings" href="/settings"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <p>Link</p>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li class="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <a title="LogOut" href="#"
                                            class="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <p>Link</p>
                                            <span>LogOut</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </header>
            </div>
        </>
    )
}

export default SideBar