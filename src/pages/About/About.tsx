import { Container, Typography, Box, Paper, Button } from "@mui/material";
import { Building2, Users, Target, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
            <Button
                startIcon={<ArrowLeft size={20} />}
                onClick={() => navigate("/")}
                sx={{
                    mt: { xs: 1, md: 3 },
                    mb: { xs: 2, md: 3 },
                    color: "#6b21a8",
                    "&:hover": {
                        backgroundColor: "rgba(107, 33, 168, 0.1)",
                    },
                }}
            >
                Back to Home
            </Button>
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        background: "linear-gradient(135deg, #6b21a8 0%, #a855f7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    About Us
                </Typography>
            </Box>

            <Paper elevation={3} sx={{ p: 4, mb: 4, background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, color: "#6b21a8" }}>
                    Who We Are
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Paper>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 4 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Target size={32} style={{ color: "#6b21a8", marginRight: "12px" }} />
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#6b21a8" }}>
                            Our Mission
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Paper>

                <Paper elevation={3} sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Award size={32} style={{ color: "#6b21a8", marginRight: "12px" }} />
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#6b21a8" }}>
                            Our Vision
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                    </Typography>
                </Paper>
            </Box>

            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Users size={32} style={{ color: "#6b21a8", marginRight: "12px" }} />
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#6b21a8" }}>
                        Our Values
                    </Typography>
                </Box>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
                    {[
                        { title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                        { title: "Dolor Sit Amet", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                        { title: "Consectetur", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
                        { title: "Adipiscing", description: "Duis aute irure dolor in reprehenderit in voluptate velit." },
                    ].map((value, index) => (
                        <Box key={index}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                                {value.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {value.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, background: "linear-gradient(135deg, #6b21a8 0%, #a855f7 100%)", color: "white" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Building2 size={32} style={{ marginRight: "12px" }} />
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Registration Details
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                    <strong>Registration Number:</strong> 1234567890
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Address:</strong> 123 Dummy Street, Dummy City, Dummy State
                </Typography>
                <Typography variant="body1">
                    <strong>Contact:</strong> +1 234 567 8900 | support@dummy.com
                </Typography>
            </Paper>
        </Container>
    );
};

export default About;
