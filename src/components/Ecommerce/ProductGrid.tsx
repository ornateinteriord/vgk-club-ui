import { Box, Container, Typography, Grid, Card, Button } from '@mui/material';

const mockSarees = [
  {
    id: 1,
    name: 'Kanchipuram Silk Bridal Saree',
    price: '₹15,000',
    originalPrice: '₹18,000',
    imageUrl: 'https://images.unsplash.com/photo-1610189013658-0051a8f6027f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Sale'
  },
  {
    id: 2,
    name: 'Soft Silk Handloom Saree',
    price: '₹8,500',
    originalPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1583391733958-d15ce69c8c19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'New'
  },
  {
    id: 3,
    name: 'Mysore Silk Classic Saree',
    price: '₹6,200',
    originalPrice: '₹7,500',
    imageUrl: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: ''
  },
  {
    id: 4,
    name: 'Banarasi Brocade Saree',
    price: '₹12,000',
    originalPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller'
  }
];

const ProductGrid = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1, color: '#222' }}>
          New Arrivals
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', mb: 6 }}>
          Explore our latest collection of premium silk sarees
        </Typography>
        
        <Grid container spacing={4}>
          {mockSarees.map((saree) => (
            <Grid item xs={12} sm={6} md={3} key={saree.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                },
                position: 'relative'
              }}>
                {saree.badge && (
                  <Box sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: saree.badge === 'Sale' ? '#d32f2f' : '#1976d2',
                    color: '#fff',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    zIndex: 1
                  }}>
                    {saree.badge}
                  </Box>
                )}
                <Box sx={{ position: 'relative', pt: '120%', overflow: 'hidden' }}>
                  <Box component="img" src={saree.imageUrl} alt={saree.name} sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} />
                </Box>
                <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
                    {saree.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
                    <Typography variant="h6" sx={{ color: '#b30000', fontWeight: 'bold' }}>
                      {saree.price}
                    </Typography>
                    {saree.originalPrice && (
                      <Typography variant="body2" sx={{ color: '#999', textDecoration: 'line-through' }}>
                        {saree.originalPrice}
                      </Typography>
                    )}
                  </Box>
                  <Button variant="outlined" fullWidth sx={{ mt: 2, borderColor: '#b30000', color: '#b30000', '&:hover': { backgroundColor: '#b30000', color: '#fff' } }}>
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductGrid;
