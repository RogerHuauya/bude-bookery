// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
// import { AuthProvider } from "./context/authContext";
// import { ProtectedRoute } from "./routes";

// import HomePage from "./pages/HomePage";
// import RegisterPage from "./pages/RegisterPage";
// import { TaskFormPage } from "./pages/TaskFormPage";
// import { LoginPage } from "./pages/LoginPage";
// import { TasksPage } from "./pages/TasksPage";
// import { TaskProvider } from "./context/tasksContext";

// function App() {
//   return (
//     <AuthProvider>
//       <TaskProvider>
//         <BrowserRouter>
//           <main className="container content-container mx-auto px-10 md:px-0">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/register" element={<RegisterPage />} />
//               <Route element={<ProtectedRoute />}>
//                 <Route path="/tasks" element={<TasksPage />} />
//                 <Route path="/add-task" element={<TaskFormPage />} />
//                 <Route path="/tasks/:id" element={<TaskFormPage />} />
//                 <Route path="/profile" element={<h1>Profile</h1>} />
//               </Route>
//             </Routes>
//           </main>
//         </BrowserRouter>
//       </TaskProvider>
//     </AuthProvider>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { BookFormPage } from "./pages/BookFormPage";
import { LoginPage } from "./pages/LoginPage";
import { BooksPage } from "./pages/BooksPage";
import { BookProvider } from "./context/booksContext";

function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/books" element={<BooksPage />} />
                <Route path="/add-book" element={<BookFormPage />} />
                <Route path="/books/:id" element={<BookFormPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </BookProvider>
    </AuthProvider>
  );
}

export default App;