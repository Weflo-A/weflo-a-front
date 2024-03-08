import { IconButton, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import RepairCompanyCard from './RepairCompanyCard';
import logoImg1 from 'src/assets/images/repair-logo.png';
import Pagination, { PaginationHandles } from '../common/Pagination';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const RepairCompanyList = () => {
  const paginationRef = useRef<PaginationHandles>(null);

  const [posts, setPosts] = useState([0, 0, 0, 0, 0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

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
        <Stack width='100%' direction='row' gap='1rem' justifyContent='center'>
          {currentPosts.map((_, index) => (
            <RepairCompanyCard
              key={index}
              logo={logoImg1}
              cost={[72000, 124000]}
              name='해오름 드론 항공'
              tag={[
                '수리 가능',
                '호환 가능 부품 보유',
                'Blade 부품 보유',
                'Motor 부품 보유',
                '기능 업그레이드 가능',
              ]}
              type='best'
            />
          ))}
        </Stack>
        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Pagination
        ref={paginationRef}
        postsNum={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default RepairCompanyList;
