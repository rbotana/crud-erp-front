import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";


import { CategoryCreate } from "./features/categories/CreateCategory";
import { CategoryEdit } from "./features/categories/EditCategory";
import { CategoryList } from "./features/categories/ListCategory";


// import { ProtectedRoute } from "./components/ProtectedRoute";
// import Login from "./components/Login";

function App() {
  return (
    <div data-testid="app">
      <Layout>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          

          {/* Category */}
          <Route
            path="/categories"
            element={
                <CategoryList />
            }
          />
          <Route
            path="/categories/create"
            element={
                <CategoryCreate />
            }
          />
          <Route
            path="/categories/edit/:id"
            element={
                <CategoryEdit />
            }
          />

          <Route
            path="*"
            element={
              <Box sx={{ color: "white" }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h2">Page not found</Typography>
              </Box>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
