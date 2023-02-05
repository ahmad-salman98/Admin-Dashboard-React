import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Context from '../context';

export default function BasicBreadcrumbs({ className }) {
    return (
        <div role="presentation" className="pb-5 border-b-[1px] border-[#d3d3d3] [&>*]:text-sm">
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}
            >
                <Link underline="hover" color="#104ab5" href="/">
                    <p className={className}>
                        Home
                    </p>
                </Link>
                <Link
                    underline="hover"
                    color="#104ab5"
                    href="/"
                >
                    <p className={className}>

                        Adminstration
                    </p>
                </Link>
                <Link color="#00000070"
                    underline='none'
                    className='cursor-pointer'>
                    <p className={className}>
                        Logger search
                    </p>
                </Link>
            </Breadcrumbs>
        </div>
    );
}