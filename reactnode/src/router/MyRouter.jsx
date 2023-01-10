import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "../page/Layout";
import { Users } from "../page/Users";
import { Thanks } from "../page/Thanks";
import { Search } from "../page/Search";


export const MyRouter = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Users />} />
              <Route element={<Search />}></Route>
              <Route path="thanks" element={<Thanks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
} 