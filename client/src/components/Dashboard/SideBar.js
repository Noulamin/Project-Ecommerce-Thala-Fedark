import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
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
    )
}

export default SideBar