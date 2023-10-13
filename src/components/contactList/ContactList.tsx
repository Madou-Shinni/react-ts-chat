import React from "react";
import ContactListWrapper, {Contacts} from "./style";
import FilterList from "../filterList/FilterList";
import ContactCard from "../contactCard/ContactCard";

type Props = {
}

const ContactList: React.FC<Props> = (props) => {
    return <ContactListWrapper {...props}>
        <FilterList options={['按姓名排序','新添加优先']} actionLabel={'添加好友'}>
            <Contacts>
                {new Array(10).fill(0).map((_,i)=>(
                    <ContactCard key={i}/>
                ))}
            </Contacts>
        </FilterList>
    </ContactListWrapper>
}


export default ContactList;
