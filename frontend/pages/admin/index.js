import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import { FaListAlt, FaTags, FaEdit, FaTrashAlt, FaUserEdit } from 'react-icons/fa';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 d-flex justify-content-center">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="row col-md-12 col-sm-12 p-0 m-0"> 
                            <div className="col-md-12">
                                <div className="card-group">
                                    <div className="card light">
                                        <div className="card-body">
                                            <h5 className="card-title">Create Category</h5>
                                            <Link href="/admin/crud/category-tag">
                                                <a className="card-link"><FaListAlt /> Create Category</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card light">
                                        <div className="card-body">
                                            <h5 className="card-title">Create Tag</h5>
                                            <Link href="/admin/crud/category-tag">
                                                <a className="card-link"><FaTags /> Create Tag</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card light">
                                        <div className="card-body">
                                            <h5 className="card-title">Create Blog</h5>
                                            <a href="/admin/crud/blog" className="card-link"><FaEdit /> Create Blog</a>
                                        </div>
                                    </div>

                                    <div className="card light">
                                        <div className="card-body">
                                            <h5 className="card-title">Update/Delete Blog</h5>
                                            <Link href="/admin/crud/blogs">
                                                <a className="card-link"><FaTrashAlt /> Update/Delete Blog</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card light">
                                        <div className="card-body">
                                            <h5 className="card-title">Update Profile</h5>
                                            <Link href="/user/update">
                                                <a className="card-link"><FaUserEdit /> Update Profile</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-8">right</div> */}
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
