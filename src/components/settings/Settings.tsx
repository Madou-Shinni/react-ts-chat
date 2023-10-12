import React from "react";
import SettingsWrapper, {SettingsItemControl, SettingsItemWrapper} from "./style";
import Paragraph from "../paragraph/Paragraph";
import Switch from "../switch/Switch";
import Icon from "../icon/Icon";
import {ReactComponent as ArrowMenuRight} from 'assets/icons/arrowMenuRight.svg'
import Seperator from "../seperator/Seperator";

type Props = {
}

type SettingItemProps = {
    type?: string
    label?: string
    description?: string
    children?: any
}

const Settings: React.FC<Props> = (props) => {
    return <SettingsWrapper {...props}>
    </SettingsWrapper>
}

const SettingsItem: React.FC<SettingItemProps> = ({type = 'switch',...props}) => {
    return <SettingsItemWrapper {...props}>
        <SettingsItemControl>
            <Paragraph size={'large'}>
                {props.label}
            </Paragraph>
            {type === 'switch' && <Switch />}
            {type === 'menu' && <Icon icon={ArrowMenuRight} />}
        </SettingsItemControl>
        {props.description &&
            <Paragraph type={'secondary'} style={{margin: '4px 0'}}>{props.description}</Paragraph>
        }
        <Seperator style={{marginTop: '8px',marginBottom: '20px'}} />
    </SettingsItemWrapper>
}


export default Settings;
export {SettingsItem}