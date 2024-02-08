import React from 'react'
import { Avatar as AntdAvatar, AvatarProps} from 'antd'
import { getNameInitials } from '@/utilities';

type Props = AvatarProps & {
    name?:string;
}
const CustomAvatar = ({name, style, ...rest}: Props) => {

  return (
    <AntdAvatar
        alt={'JavaScript Matery'}
        size="small"
        style={{background:'#87d068',
            display: 'flex',
            alignItems: 'center',
            border:'none',
            ...style
        }}
        {...rest}
    >
        {getNameInitials(name || '')}
    </AntdAvatar>
  )
}

export default CustomAvatar