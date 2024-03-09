import styled from 'styled-components';
import colors from 'src/constants/colors';
import { Typography } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import Button from 'src/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { BladeAccent, ESCAccent, MotorAccent } from 'src/assets';
import { GroupPartCard } from './GroupPartCard';
import React, { useState } from 'react';
import Pagination, {
  PaginationHandles,
} from 'src/components/common/Pagination';

interface GroupPart {
  groupName: string;
  modelName: string;
  componentStatus: { name: string; quantity: number }[];
}

interface Props {
  period: string;
  partsData: GroupPart[];
  mode: string;
}

const WeekPartCard: React.FC<Props> = ({ period, partsData, mode }: Props) => {
  const navigate = useNavigate();
  const [selectedParts, setSelectedParts] = useState<{ [key: string]: number }>(
    {}
  );

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(partsData.length / itemsPerPage);
  const paginationRef = React.useRef<PaginationHandles>(null);

  const handlePartSelect = (
    partName: string,
    partNum: number,
    checked: boolean
  ) => {
    setSelectedParts((prevState) => ({
      ...prevState,
      [partName]: checked ? (prevState[partName] || 0) + partNum : 0,
    }));
    console.log('hello', partName);
  };

  const handleButtonClick = () => {
    navigate('/drone-group/drone/parts/purchase');
  };

  // 필터된 결과를 페이지별로 나누는 함수
  const paginateData = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return partsData.slice(startIndex, endIndex);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  console.log('파트 데이터', partsData);
  return (
    <Card>
      <Left>
        <Row>
          <Typography variant='h4' fontWeight='bold' color={colors.accent100}>
            {period}
          </Typography>
          <Typography variant='h4' fontWeight='bold' color={colors.basic700}>
            내로 필요할 것으로 예측되는 부품
          </Typography>
        </Row>
        <GroupCard>
          <ChevronLeft
            sx={{ color: '#CBD5E1', width: '24px', height: '24px' }}
            onClick={handlePrevPage}
          />
          <Grid>
            {paginateData().map((data, index) => (
              <GroupPartCard
                key={index}
                groupName={mode === 'group' ? data.groupName : data.modelName}
                componentStatus={data.componentStatus}
                onSelect={(partName, partNum, checked) =>
                  handlePartSelect(partName, partNum, checked)
                }
              />
            ))}
          </Grid>
          <ChevronRight
            sx={{ color: '#CBD5E1', width: '24px', height: '24px' }}
            onClick={handleNextPage}
          />
        </GroupCard>
        {/* 페이지네이션 컴포넌트 */}
        {paginateData().length > 0 && (
          <PageMove>
            <Pagination
              ref={paginationRef}
              postsNum={partsData.length}
              postsPerPage={itemsPerPage}
              setCurrentPage={handlePageChange}
              currentPage={page}
            />
          </PageMove>
        )}
        <Bottom>
          <Box>
            <Typography fontSize='12px' color={colors.basic500}>
              선택항목
            </Typography>
            <AccentBox>
              <MotorAccent />
              모터 {selectedParts['모터'] || 0}개
            </AccentBox>
            <AccentBox>
              <BladeAccent />
              블레이드 {selectedParts['블레이드'] || 0}개
            </AccentBox>
            <AccentBox>
              <ESCAccent />
              ESC {selectedParts['ESC'] || 0}개
            </AccentBox>
            {/* {selectedParts['MOTOR'] > 0 && (
              <AccentBox>
                <MotorAccent />
                모터 {selectedParts['MOTOR'] || 0}개
              </AccentBox>
            )}
            {selectedParts['BLADE'] > 0 && (
              <AccentBox>
                <BladeAccent />
                블레이드 {selectedParts['BLADE'] || 0}개
              </AccentBox>
            )}
            {selectedParts['ESC'] > 0 && (
              <AccentBox>
                <ESCAccent />
                ESC {selectedParts['ESC'] || 0}개
              </AccentBox>
            )} */}
          </Box>
          <Button
            text={
              <>
                부품 구매 바로가기 <ChevronRight />
              </>
            }
            buttonType='accent'
            onClick={handleButtonClick}
            style={{ width: '194px', height: '44px', fontSize: '18px' }}
          />
        </Bottom>
      </Left>
    </Card>
  );
};

export { WeekPartCard };

const Card = styled.div`
  width: 100%;
  height: 351px;
  border-radius: 12px;
  border: 1px solid ${colors.basic200};
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const GroupCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 882px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 632px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${colors.basic100};
  background: ${colors.basic50};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
`;

const AccentBox = styled.div`
  height: 23px;
  display: flex;
  padding: 4px 12px 3px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: ${colors.accentOpacity20};
  color: ${colors.accent100};
  font-size: 14px;
  white-space: nowrap;
`;

const PageMove = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
  text-align: left;
`;
