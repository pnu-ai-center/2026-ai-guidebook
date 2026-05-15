import React from 'react';

/**
 * 멀티컬럼 레이아웃 컴포넌트
 *
 * 사용법:
 * <Columns>
 *   <Col>왼쪽 내용</Col>
 *   <Col>오른쪽 내용</Col>
 * </Columns>
 *
 * 3컬럼:
 * <Columns cols={3}>
 *   <Col>1</Col><Col>2</Col><Col>3</Col>
 * </Columns>
 */
export default function Columns({ children, cols = 2, gap = '28px' }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap,
        margin: '2rem 0',
        alignItems: 'start',
      }}
    >
      {children}
    </div>
  );
}

export function Col({ children, style = {} }) {
  return <div style={style}>{children}</div>;
}
