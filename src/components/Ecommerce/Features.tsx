import { Box, Container, Grid, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Features = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#fff', borderTop: '1px solid #eaeaea' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <LocalShippingOutlinedIcon sx={{ fontSize: 50, color: '#b30000', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1.1rem' }}>
              Free Shipping
            </Typography>
            <Typography variant="body2" color="text.secondary">
              From all orders over ₹2000
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <PaymentOutlinedIcon sx={{ fontSize: 50, color: '#b30000', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1.1rem' }}>
              Payment Process
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Return money within 7 days
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <SupportAgentOutlinedIcon sx={{ fontSize: 50, color: '#b30000', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1.1rem' }}>
              Phone Support
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We have everything you need
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
