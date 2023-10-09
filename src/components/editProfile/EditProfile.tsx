import React, {useState} from "react";
import EditProfileWrapper from "./style";
import Profile from "../profile/Profile";

type Props = {
    children?: any
}

const EditProfile: React.FC<Props> = (props) => {
    const [showEdit, setShowEdit] = useState(false)
    return showEdit ? <EditProfileWrapper {...props}>
        {props.children}
    </EditProfileWrapper> : <Profile onEdit={()=> setShowEdit(true)} showEditButton showCloseIcon={false} />
}


export default EditProfile;
