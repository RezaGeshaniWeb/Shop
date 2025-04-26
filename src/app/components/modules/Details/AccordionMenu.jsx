'use client';

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    typography: {
        fontFamily: 'kalame',
    },
});

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography component="span" sx={{ fontWeight: 'bold', marginRight: '10px' }}>ویژگی‌های برجسته عینک‌ آیس برلین</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            یکی از ویژگی‌های خاص این مدل آیس برلین، فریم‌ بدون پیچ است. این برند از روش‌های خاصی برای جوش دادن فریم‌ها به هم استفاده می‌کند که منجر به ساخت عینک‌هایی سبک، مقاوم و بدون هیچ گونه پیچ یا بست‌های قابل مشاهده می‌شود. این طراحی نه تنها جذابیت بصری دارد، بلکه به استحکام بیشتر و راحتی بیشتر عینک‌ها کمک می‌کند.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography component="span" sx={{ fontWeight: 'bold', marginRight: '10px' }}>مواد با کیفیت بالا</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            این مدل آیس برلین از آلیاژ با کیفیت و مقاوم فلز تیتانیوم انعطاف پذیر ساخته شده است. استفاده از تیتانیوم باعث می‌شود که این فریم‌ سبک ، مقاوم و ضدزنگ  و قابل انعطاف پذیر و نشکن باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography component="span" sx={{ fontWeight: 'bold', marginRight: '10px' }}>طراحی سبک و راحت</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            یکی از مزایای بزرگ این مدل، راحتی استفاده از آن است. فریم‌ سبک و متناسب با صورت این مدل، این امکان را فراهم می‌آورد که عینک‌ها به‌طور راحت و بدون احساس فشار در طول روز استفاده شوند. به علاوه، طراحی‌های ارگونومیک این برند باعث می‌شود که عینک به راحتی روی صورت بنشیند و حرکت‌های ناخواسته نداشته باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </ThemeProvider>
    )
}