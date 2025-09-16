import api from '@/apis/api'
import type { ApiResponse } from '@/types/common.ts'
import type { EditMyInfoType } from '@/types/edit-mypage.ts'

export const patchUsersMyPage = async (
  editMyInfoData: EditMyInfoType,
): Promise<ApiResponse<EditMyInfoType>> => {
  const res = await api.patch<ApiResponse<EditMyInfoType>>(
    `/users/my-page`,
    editMyInfoData,
  )

  return res.data
}
