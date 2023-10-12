import React from "react";
import SettingsWrapper, {SettingsGroupWrapper, SettingsItemControl, SettingsItemWrapper} from "./style";
import Paragraph from "../paragraph/Paragraph";
import Switch from "../switch/Switch";
import Icon from "../icon/Icon";
import {ReactComponent as ArrowMenuRight} from 'assets/icons/arrowMenuRight.svg'
import Seperator from "../seperator/Seperator";

type Props = {
}

type SettingsItemProps = {
    type?: string
    label?: string
    description?: string
    children?: any
}

type SettingsGroupProps = {
    groupName?: string
    children?: any
}

const Settings: React.FC<Props> = (props) => {
    return <SettingsWrapper {...props}>
        <SettingsGroup groupName={'隐私设置'}>
            <SettingsItem label={'添加好友时需要验证'}/>
            <SettingsItem
                label={'推荐通讯录好友'}
                description={'上传的通讯录只用来匹配好友列表'}
            />
            <SettingsItem label={'只能通过手机号找到我'}/>
        </SettingsGroup>
        <SettingsGroup groupName={'通知设置'}>
            <SettingsItem label={'新消息通知'} />
            <SettingsItem label={'语音和视频童话提醒'} />
            <SettingsItem label={'显示通知详情'} />
            <SettingsItem label={'声音'} />
            <SettingsItem label={'查看已静音的好友列表'} type={'menu'} />
        </SettingsGroup>
    </SettingsWrapper>
}

const SettingsItem: React.FC<SettingsItemProps> = ({type = 'switch',...props}) => {
    return <SettingsItemWrapper {...props}>
        <SettingsItemControl>
            <Paragraph size={'large'}>
                {props.label}
            </Paragraph>
            {type === 'switch' && <Switch />}
            {type === 'menu' && <Icon icon={ArrowMenuRight} />}
        </SettingsItemControl>
        {props.description &&
            /*@ts-ignore*/
            <Paragraph type={'secondary'} style={{margin: '4px 0'}}>{props.description}</Paragraph>
        }
        <Seperator /*@ts-ignore*/
            style={{marginTop: '8px',marginBottom: '20px'}}
        />
    </SettingsItemWrapper>
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({groupName,children,...props}) => {
    return <SettingsGroupWrapper {...props}>
        <Paragraph
            size={'xxlarge'}
            /* @ts-ignore*/
            style={{paddingBottom: '24px'}}>
            {groupName}
        </Paragraph>
        {children}
    </SettingsGroupWrapper>
}


export default Settings;
export {SettingsItem}