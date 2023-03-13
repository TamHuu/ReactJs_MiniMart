

import { Box } from '@mui/material';
import {  styled } from '@mui/material/styles';



/**
 * Tạo khoảng cách giữa các elements
 * @param {number} spacing nhập giá trị type number/string
 */
const SectionTemplate = styled(Box, { name: 'SectionTemplate' })(
  ({ theme, spacing = 2 }) => ({
    '& > *:not(:first-of-type)': {
      marginTop: theme.spacing(spacing),
    },
  }),
);

export default SectionTemplate;
