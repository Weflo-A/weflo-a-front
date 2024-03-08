import { IconButton, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import RepairCompanyCard from './RepairCompanyCard';
import logoImg1 from 'src/assets/images/repair-logo.png';
import Pagination, { PaginationHandles } from '../common/Pagination';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export interface RepairCompany {
  name: string;
  image: string;
  features: string[];
  minPrice: number;
  maxPrice: number;
}

interface RepairCompanyProps {
  items: RepairCompany[];
}

const RepairCompanyList = ({ items }: RepairCompanyProps) => {
  const paginationRef = useRef<PaginationHandles>(null);

  // const [posts, setPosts] = useState(items);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex);

  const handleNextPage = () => {
    if (paginationRef.current) {
      paginationRef.current.goToNextPage();
    }
  };

  const handlePrevPage = () => {
    if (paginationRef.current) {
      paginationRef.current.goToPrevPage();
    }
  };

  return (
    <>
      <Stack width='100%' direction='row' alignItems='center'>
        <IconButton
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          sx={{ right: 0 }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Stack
          width='100%'
          display='grid'
          direction='row'
          gridTemplateColumns='1fr 1fr 1fr'
          gap='1rem'
        >
          {currentPosts.map((item, index) => (
            <RepairCompanyCard
              key={index}
              logo={logoImg1}
              cost={[item.minPrice, item.maxPrice]}
              name={item.name}
              tag={item.features}
              type='best'
            />
          ))}
        </Stack>
        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(items.length / postsPerPage)}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Pagination
        ref={paginationRef}
        postsNum={items.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default RepairCompanyList;
