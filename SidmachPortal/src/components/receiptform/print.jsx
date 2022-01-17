import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ReceiptForm from './formReceipt';
import PrintIcon from '@material-ui/icons/Print';

import './formReceipt.css';


class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <div>
                <ReceiptForm />
            </div>
        );
    }
}

const ReceiptPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <button onClick={handlePrint} className='printButton'>
                <PrintIcon />
                Print
            </button>
        </div>
    );
};

export default ReceiptPrint;