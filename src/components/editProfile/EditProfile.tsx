import React, {useState} from "react";
import EditProfileWrapper, {GenderAndRegion, GroupTitle, IconInputWrapper, SelectGroup} from "./style";
import Profile from "../profile/Profile";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import face from "assets/images/OIP.jpg";
import "styled-components/macro"
import InputText from "../input/inputText/InputText";
import Radio, {RadioGroup} from "../radio/Radio";
import LabelContainer from "../labelContainer/LabelContainer";
import Select from "../select/Select";
import Option from "../option/Option";
import SocialIcon from "../icon/socialIcon/SocialIcon";
import {faGithub, faLinkedin, faWeibo} from "@fortawesome/free-brands-svg-icons";

type Props = {
    children?: any
}

const EditProfile: React.FC<Props> = (props) => {
    const [showEdit, setShowEdit] = useState(false)
    return showEdit ? <EditProfileWrapper {...props}>
        <Avatar
            src={face}
            size={'160px'}
            css={`
              grid-area: 1 / 1 / 2 / 2;
              justify-self: center;
              margin-bottom: 12px;
            `}
        />
        <Button
            size={'52px'}
            css={`
              grid-area: 1 / 1 / 3 / 2;
              z-index: 10;
              align-self: end;
              justify-self: end;
`           }
            onClick={()=> setShowEdit(false)}
        >
            <FontAwesomeIcon icon={faCheck} />
        </Button>
        <GroupTitle>基本信息</GroupTitle>
        <InputText label={'昵称'} />
        <GenderAndRegion>
            <RadioGroup label={'性别'}>
                <Radio name={'gender'}>男</Radio>
                <Radio name={'gender'}>女</Radio>
            </RadioGroup>
            <LabelContainer label={'地区'}>
                <SelectGroup>
                    <Select type={'form'}>
                        <Option >省份</Option>
                    </Select>
                    <Select type={'form'}>
                        <Option >城市</Option>
                    </Select>
                    <Select type={'form'}>
                        <Option >县区</Option>
                    </Select>
                </SelectGroup>
            </LabelContainer>
        </GenderAndRegion>
        <GroupTitle>联系信息</GroupTitle>
        <InputText label={'联系电话'} />
        <InputText label={'电子邮箱'} />
        <InputText label={'个人网站'} />
        <GroupTitle>社交信息</GroupTitle>
        <IconInput icon={faWeibo} bgColor={'#F06767'} />
        <IconInput icon={faGithub} bgColor={'black'} />
        <IconInput icon={faLinkedin} bgColor={'#2483c0'} />
    </EditProfileWrapper> : <Profile onEdit={()=> setShowEdit(true)} showEditButton showCloseIcon={false} />
}

type IconInputProps = {
    icon: any
    bgColor: string
}

const IconInput: React.FC<IconInputProps> = ({icon,bgColor,...props}) => {
    return <IconInputWrapper>
        <SocialIcon icon={icon} bgColor={bgColor} />
        <InputText {...props} />
    </IconInputWrapper>
}


export default EditProfile;
