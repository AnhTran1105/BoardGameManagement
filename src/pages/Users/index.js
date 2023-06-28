import usePortal from 'react-cool-portal';
import { useState, useEffect, useRef } from 'react';
import Tooltip from '@tippyjs/react';
import axios from '../../utils/axios';
import { useStore } from '~/store';

function Users() {
    const { Portal, show, hide } = usePortal({
        defaultShow: false,
    });

    const modalRef = useRef();
    const [isDeleting, setDeleting] = useState(false);
    const [isUpdating, setUpdating] = useState(false);
    const [reloadComponent, setReloadComponent] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState(null);
    const [state] = useStore();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                hide();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        (async () => {
            await axios
                .get('user/get-all')
                .then((response) => {
                    setUsers(response.users);
                })
                .catch((error) => console.error(error));
        })();
    }, [reloadComponent]);

    const [formData, setFormData] = useState({
        name: { firstName: '', lastName: '' },
        phoneNumber: '',
        gender: '',
        birthday: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'firstName' || name === 'lastName') {
            setFormData((prevData) => ({
                ...prevData,
                name: {
                    ...prevData.name,
                    [name]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = formData.name;
        const phoneNumber = formData.phoneNumber;
        const gender = formData.gender;
        const birthday = formData.birthday;
        const address = formData.address;

        await axios.post('user/create', {
            name,
            phoneNumber,
            gender,
            birthday,
            address,
        });
        hide();
        setReloadComponent(true);
    };

    useEffect(() => {
        if (reloadComponent) {
            setReloadComponent(false);
        }
    }, [reloadComponent]);

    // const handleDeleteUsers = async () => {
    //     await axios.post('user/delete', {
    //         selectedUsers,
    //     });

    //     window.location.reload();
    // };

    const handleUserClick = (user) => {
        const userExists = selectedUsers.find(
            (selectedUser) => JSON.stringify(selectedUser) === JSON.stringify(user),
        );

        if (userExists) {
            setSelectedUsers((prevUsers) =>
                prevUsers.filter(
                    (selectedUser) => JSON.stringify(selectedUser) !== JSON.stringify(user),
                ),
            );
        } else {
            setSelectedUsers((prevUsers) => [...prevUsers, user]);
        }
    };

    if (!users) {
        return null;
    }

    const filteredUsers = users.filter((user) =>
        (user.name.firstName + ' ' + user.name.lastName)
            .toLowerCase()
            .includes(state.searchUsers.toLowerCase()),
    );

    return (
        <div className="container pad-t-32">
            <h3 className="app-section-title title is-2">
                <div className="action-btns">
                    <Tooltip content="Create new user">
                        <button className="app-btn success-btn" onClick={show}>
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    id="add-account"
                                >
                                    <path d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z"></path>
                                </svg>
                            </i>
                            New
                        </button>
                    </Tooltip>
                </div>
                <div className="action-btns">
                    <Tooltip content="Update user">
                        <button
                            className="app-btn normal-btn"
                            onClick={() => {
                                setDeleting(false);
                                setUpdating(!isUpdating);
                            }}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    id="pencil"
                                    width="20"
                                    height="20"
                                >
                                    <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
                                </svg>
                            </i>
                            Update
                        </button>
                    </Tooltip>
                    <Tooltip content="Delete user">
                        <button
                            className="app-btn normal-btn"
                            onClick={() => {
                                setUpdating(false);
                                setDeleting(!isDeleting);
                            }}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="24"
                                    height="24"
                                    id="delete"
                                >
                                    <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path>
                                </svg>
                            </i>
                            Delete
                        </button>
                    </Tooltip>
                </div>
            </h3>
            <div className="content-wrapper">
                <div className="list list-border">
                    <div className="media list-header">
                        <div className="item-name">Name</div>
                        <div className="item-phone-number">Phone number</div>
                        <div className="item-gender">Gender</div>
                        <div className="item-birthday">Birthday</div>
                        <div className="item-address">Address</div>
                    </div>
                    <ul className="list-item">
                        {filteredUsers.map((user, index) => (
                            <li className="item" key={index}>
                                <div className="item-name">
                                    {user.name.firstName} {user.name.lastName}
                                </div>
                                <div className="item-phone-number">{user.phoneNumber}</div>
                                <div className="item-gender">{user.gender}</div>
                                <div className="item-birthday">{user.birthday}</div>
                                <div className="item-address">{user.address}</div>
                                {isDeleting ? (
                                    <input
                                        type="checkbox"
                                        name="selectedUser"
                                        className="user-select"
                                        checked={selectedUsers.some(
                                            (selectedUser) =>
                                                JSON.stringify(selectedUser) ===
                                                JSON.stringify(user),
                                        )}
                                        onChange={() => handleUserClick(user)}
                                    />
                                ) : (
                                    ''
                                )}
                                {isUpdating ? (
                                    <input
                                        type="radio"
                                        name="selectedUser"
                                        className="user-select"
                                        checked={
                                            JSON.stringify(selectedUser) === JSON.stringify(user)
                                        }
                                        onChange={() => setSelectedUser(user)}
                                    />
                                ) : (
                                    ''
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isDeleting ? (
                <div
                    className="action-btns mar-t-32 mar-b-32"
                    style={{ justifyContent: 'flex-end' }}
                >
                    <Tooltip content={`Delete ${selectedUsers.length} users`}>
                        <button
                            className="app-btn danger-btn large"
                            // onClick={() => handleDeleteUsers()}
                            disabled={selectedUsers.length === 0}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width="24"
                                    height="24"
                                    id="delete"
                                >
                                    <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path>
                                </svg>
                            </i>
                            Delete
                        </button>
                    </Tooltip>
                    <Tooltip content="Cancel all selections">
                        <button
                            className="app-btn normal-btn large"
                            onClick={() => {
                                setSelectedUsers([]);
                            }}
                            disabled={selectedUsers.length === 0}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    id="cancel"
                                >
                                    <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                                </svg>
                            </i>
                            Cancel
                        </button>
                    </Tooltip>
                </div>
            ) : (
                ''
            )}
            {isUpdating ? (
                <div
                    className="action-btns mar-t-32 mar-b-32"
                    style={{ justifyContent: 'flex-end' }}
                >
                    <Tooltip content={`Update user`}>
                        <button
                            className="app-btn default-btn large"
                            disabled={!selectedUser}
                            // onClick={() => handleDeleteUsers()}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    id="pencil"
                                    width="20"
                                    height="20"
                                >
                                    <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
                                </svg>
                            </i>
                            Update
                        </button>
                    </Tooltip>
                    <Tooltip content="Cancel selection">
                        <button
                            className="app-btn normal-btn large"
                            onClick={() => {
                                setSelectedUser();
                            }}
                            disabled={!selectedUser}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    id="cancel"
                                >
                                    <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                                </svg>
                            </i>
                            Cancel
                        </button>
                    </Tooltip>
                </div>
            ) : (
                ''
            )}
            <Portal>
                <div className="app-portal-modal">
                    <div className="modal is-active" ref={modalRef}>
                        <div role="presentation" className="modal-background">
                            <div className="modal-content">
                                <div className="form center">
                                    <div className="form-header">
                                        <h1>Create new user</h1>
                                        <Tooltip content="Close">
                                            <button className="app-btn" onClick={hide}>
                                                <i className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        id="close"
                                                        width="20"
                                                        height="20"
                                                    >
                                                        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                                                    </svg>
                                                </i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                    <div className="form-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex-items">
                                                <div>
                                                    <label htmlFor="firstName">First name</label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="firstName"
                                                        type="text"
                                                        value={formData.name.firstName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName">Last name</label>
                                                    <input
                                                        className="form-control form-control input-block"
                                                        name="lastName"
                                                        type="text"
                                                        value={formData.name.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <label htmlFor="phoneNumber">Phone number</label>
                                            <input
                                                className="form-control form-control input-block"
                                                name="phoneNumber"
                                                type="tel"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="gender">
                                                Gender
                                                <div className="custom-select">
                                                    <select
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={handleChange}
                                                        style={{ width: '100%' }}
                                                        required
                                                        className="form-control input-block"
                                                    >
                                                        <option value="">
                                                            -- Select gender --
                                                        </option>
                                                        <option value="MALE">Male</option>
                                                        <option value="FEMALE">Female</option>
                                                    </select>
                                                    <div className="select-arrow"></div>
                                                </div>
                                            </label>
                                            <label htmlFor="birthday">Birthday</label>
                                            <input
                                                className="form-control input-block"
                                                name="birthday"
                                                type="date"
                                                value={formData.birthday}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="address">Address</label>
                                            <input
                                                className="form-control input-block"
                                                name="address"
                                                type="text"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                Add user
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Portal>
        </div>
    );
}

export default Users;
