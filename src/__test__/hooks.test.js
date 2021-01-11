import { renderHook, act } from '@testing-library/react-hooks'

// import useLazy from './../hooks/useLazy'
import useGetListFiles from './../hooks/useGetListFiles'

test.only('should work useGetListFiles', () => {
  const { result } = renderHook(() => useGetListFiles('html'))

  expect(result.current).toEqual([])
})