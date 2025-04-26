'use client'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    typography: {
        fontFamily: 'kalame',
    },
});

export default function AccordionExpandDefault() {
    return (
        <ThemeProvider theme={theme}>
            <div className='w-full lg:w-3/4 mx-auto mb-20'>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" sx={{ fontWeight: 'bold' }}>چگونه می‌توانم سفارش خود را ثبت کنم؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'gray' }}>
                            برای ثبت سفارش ، ابتدا محصول مورد نظر خود را انتخاب کرده و به سبد خرید اضافه کنید. سپس با تکمیل اطلاعات مورد نیاز و انتخاب روش پرداخت ، سفارش خود را نهایی کنید.
                            همچنین در صورت تمایل می‌توانید با کارشناسان ما در واتساپ (لینک) و دایرکت اینستاگرام (لینک) در تماس باشید تا فرآیند ثبت سفارش شما را انجام دهند
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span" sx={{ fontWeight: 'bold' }}>چه روش‌های پرداختی را می‌توانم استفاده کنم؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'gray' }}>
                            شما می‌توانید از طریق درگاه‌ مستقیم و امن پارسیان و همینطور درگاه پرداخت امن زرین پال و یا پرداخت در محل (ویژه‌ی تهران و کرج) هزینه‌ سفارش خود را پرداخت کنید .
                            همچنین با درگاه پرداخت اسنپ پی میتونید مبلغ سفارش خود را طی چهار قسط پرداخت نمایید.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span" sx={{ fontWeight: 'bold' }}>مدت زمان تحویل سفارش چقدر است؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'gray' }}>
                            ارسال سی سی همیشه فوری و تحویل به ادارات مربوطه زیر ۲۴ ساعت پس از ثبت سفارش است.
                            زمان تحویل سفارش‌ها بسته به موقعیت جغرافیایی و نحوه ی ارسال انتخابی شما (پست ، تیپاکس و پیک) متفاوت است ، اما به‌طور معمول با پست بین ۳ تا ۵ روز کاری ، ارسال با تیپاکس ۴۸ ساعته و
                            پیک در همان ساعات ثبت سفارش شما ، مرسوله به دست شما می‌رسد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span" sx={{ fontWeight: 'bold' }}>آیا امکان تعویض یا بازگشت کالا وجود دارد؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'gray' }}>
                            بله ، در صورت وجود هرگونه نقص یا عدم تطابق محصول با سفارش ، می‌توانید تا ۷ روز پس از دریافت کالا آن را تعویض یا بازگردانید.
                            همچنین اگر عینک مناسب سایز صورت شما و یا سلیقه ی شما نبود نیز ، تعویض انجام میشود.
                            برای اطلاعات بیشتر به بخش شرایط بازگشت کالا مراجعه کنید
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span" sx={{ fontWeight: 'bold' }}>چگونه می‌توانم از کیفیت عینک‌ها مطمئن شوم؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'gray' }}>
                            تمامی محصولات ما دارای گارانتی کالا هستند و از سازنده های معتبر تأمین می‌شوند. همچنین ، می‌توانید با بررسی مشخصات محصول و مشاوره با کارشناسان ما ، از کیفیت کالا اطمینان حاصل کنید.
                            درصورتی که علاقه داشته باشید کارشناسان ما حتما از محصول انتخابی شما ویدئوی تست محصول گرفته و برای شما ارسال می‌کنند.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </ThemeProvider>
    )
}