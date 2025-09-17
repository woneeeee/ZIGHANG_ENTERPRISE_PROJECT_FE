import { useEffect, useState } from 'react'
import { useSignUpStore } from '@/store/signupStore.ts'
import { AnimatedSpeechBubble } from '@/components/signup/AnimatedSpeechBubble.tsx'
import { postOnboardingSignUp } from '@/apis/sign-up/postOnboardingSignUp.ts'
import { useEditMyInfoStore } from '@/stores/editMyInfoStore.ts'
import { patchUsersMyPage } from '@/apis/edit-myinfo/patchUsersMyPage.ts'
import { useNavigate } from 'react-router-dom'

export default function Address() {
  return (
    <main
      id="address-section"
      className="tablet:bg-[#FAFBFE] laptop:bg-[#FAFBFE] desktop:bg-[#FAFBFE] desktop:pt-[220px] laptop:pt-[220px] tablet:pt-[180px] flex min-h-screen flex-col gap-y-4 px-4 pt-[150px]"
    >
      <h1 className="body-md-semibold tablet:heading-md-semibold desktop:heading-md-semibold laptop:heading-md-semibold">
        더 정확한 맞춤 공고를 위해, 거주하시는 곳을 알려주세요
      </h1>
      <CustomAddressSearch />
    </main>
  )
}

interface AddressType {
  roadAddr: string
  jibunAddr: string
  zipNo: string
  // 필요한 경우 다른 속성들도 추가
}

function CustomAddressSearch() {
  const nav = useNavigate()
  const setAddressState = useSignUpStore((state) => state.setState)
  const signUpData = useSignUpStore((state) => state.signUpData)
  const editMyInfoData = useEditMyInfoStore((state) => state.editMyInfoData)
  const setEditMyInfoData = useEditMyInfoStore((state) => state.setState)

  useEffect(() => {
    if (editMyInfoData) {
      setAddressState({
        ...signUpData,
        signUpData: { ...signUpData, address: editMyInfoData?.address },
      })
    }
  }, [editMyInfoData])

  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState<AddressType[]>([])

  // 모든 필수 값이 입력되었는지 확인하는 함수
  const isFormComplete = () => {
    if (!signUpData) return false
    if (editMyInfoData) {
      return (
        editMyInfoData.workExperience !== undefined &&
        editMyInfoData.education !== undefined &&
        editMyInfoData.jobGroups !== undefined &&
        editMyInfoData.jobPositions !== undefined &&
        editMyInfoData.jobPositions.length > 0 &&
        editMyInfoData.maxCommuteMinutes !== undefined &&
        editMyInfoData.transport !== undefined &&
        editMyInfoData.address !== undefined
      )
    } else {
      return (
        signUpData.workExperience !== undefined &&
        signUpData.education !== undefined &&
        signUpData.jobGroupEnum !== undefined &&
        signUpData.jobPositionEnum !== undefined &&
        signUpData.jobPositionEnum.length > 0 &&
        signUpData.maxCommuteMinutes !== undefined &&
        signUpData.transport !== undefined &&
        signUpData.address !== undefined
      )
    }
  }

  const formComplete = isFormComplete()

  const searchAddress = async () => {
    try {
      const response = await fetch(
        `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=U01TX0FVVEgyMDI1MDkwNzAwMDQxMzExNjE1NDk=&keyword=${keyword}&resultType=json`,
      )
      const data = await response.json()
      console.log(data)
      setResults(data.results.juso || [])
    } catch (error) {
      console.error('주소 검색 실패:', error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchAddress()
    }
  }

  return (
    <div className="flex w-full flex-col">
      <div className="desktop:w-[477px] laptop:w-[477px] tablet:w-[477px] flex gap-1">
        <input
          onKeyPress={handleKeyPress}
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="도로명, 지번, 건물명 검색"
          className="desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium w-full rounded-[4px] bg-neutral-100 p-2 outline-purple-500 placeholder:text-neutral-400"
        />
        <button
          onClick={searchAddress}
          className="desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium desktop:h-[48px] laptop:h-[48px] tablet:h-[48px] desktop:rounded-[6px] laptop:rounded-[6px] tablet:rounded-[6px] desktop:px-3 laptop:px-3 tablet:px-3 flex h-[32px] items-center justify-center rounded-[4px] bg-purple-500 px-2 whitespace-nowrap text-white hover:bg-purple-600"
        >
          검색
        </button>
      </div>

      <div className="mt-[9px] space-y-2">
        {signUpData?.address ? (
          <div className="desktop:w-[477px] laptop:w-[477px] tablet:w-[477px] flex flex-col gap-y-[9px]">
            <div className="desktop:body-lg-medium laptop:body-lg-medium tablet:body-lg-medium caption-sm-medium rounded-[4px] bg-neutral-100 p-2 text-neutral-400">
              {signUpData?.address}
            </div>
            <button
              onClick={() => {
                if (editMyInfoData) {
                  setEditMyInfoData({
                    ...editMyInfoData,
                    editMyInfoData: {
                      ...editMyInfoData,
                      address: undefined,
                    },
                  })
                } else {
                  setAddressState({
                    ...signUpData,
                    signUpData: { ...signUpData, address: undefined },
                  })
                }
              }}
              className="desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium desktop:h-[48px] laptop:h-[48px] tablet:h-[48px] desktop:rounded-[6px] laptop:rounded-[6px] tablet:rounded-[6px] desktop:px-3 laptop:px-3 tablet:px-3 h-[32px] w-fit cursor-pointer rounded-[4px] border border-neutral-300 bg-neutral-100 px-2"
            >
              초기화
            </button>
          </div>
        ) : (
          <div className="">
            {results.length === 10 ? (
              <div>
                <div className="desktop:body-xl-medium laptop:body-xl-medium tablet:body-xl-medium caption-sm-medium flex flex-col items-center justify-center border-b border-neutral-300 py-[30px] text-center">
                  검색 결과가 너무 많습니다.
                  <br />
                  검색어를 상세히 입력해보세요.
                </div>
                <div className="flex h-[194px] flex-col overflow-y-scroll">
                  {results.map((address, index) => (
                    <div
                      className="desktop:w-[477px] laptop:w-[477px] tablet:w-[477px] flex items-start justify-between gap-x-[14px]"
                      key={index}
                    >
                      <div
                        className="flex cursor-pointer flex-col gap-y-4"
                        onClick={() => {
                          if (editMyInfoData) {
                            setEditMyInfoData({
                              ...editMyInfoData,
                              editMyInfoData: {
                                ...editMyInfoData,
                                address: address.roadAddr,
                              },
                            })
                          } else {
                            setAddressState({
                              ...signUpData,
                              signUpData: { ...signUpData, address: address.roadAddr },
                            })
                          }
                        }}
                      >
                        <div className="desktop:body-xl-medium laptop:body-xl-medium tablet:body-xl-medium caption-sm-medium">
                          {address.roadAddr}
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <div className="flex gap-x-[2px]">
                            <div className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium desktop:px-1 laptop:px-1 tablet:px-1 w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                              지번
                            </div>
                            <div className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium text-neutral-400">
                              {address.jibunAddr}
                            </div>
                          </div>
                          <div className="flex items-center gap-x-[2px]">
                            <div className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium desktop:px-1 laptop:px-1 tablet:px-1 w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                              우편번호
                            </div>
                            <p className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium text-neutral-400">
                              {address.zipNo}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (editMyInfoData) {
                            setEditMyInfoData({
                              ...editMyInfoData,
                              editMyInfoData: {
                                ...editMyInfoData,
                                address: address.roadAddr,
                              },
                            })
                          } else {
                            setAddressState({
                              ...signUpData,
                              signUpData: { ...signUpData, address: address.roadAddr },
                            })
                          }
                        }}
                        className="desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium desktop:h-[28px] laptop:h-[28px] tablet:h-[28px] desktop:rounded-[4px] laptop:rounded-[4px] tablet:rounded-[4px] desktop:px-[10px] laptop:px-[10px] tablet:px-[10px] h-[24px] cursor-pointer rounded-[2px] bg-purple-200 px-[6px] whitespace-nowrap"
                      >
                        선택
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : results.length !== 0 ? (
              results.map((address, index) => (
                <div
                  className="desktop:w-[477px] laptop:w-[477px] tablet:w-[477px] flex items-start justify-between gap-x-[14px]"
                  key={index}
                >
                  <div
                    className="flex cursor-pointer flex-col gap-y-4"
                    onClick={() => {
                      if (editMyInfoData) {
                        setEditMyInfoData({
                          ...editMyInfoData,
                          editMyInfoData: {
                            ...editMyInfoData,
                            address: address.roadAddr,
                          },
                        })
                      } else {
                        setAddressState({
                          ...signUpData,
                          signUpData: { ...signUpData, address: address.roadAddr },
                        })
                      }
                    }}
                  >
                    <div className="desktop:body-xl-medium laptop:body-xl-medium tablet:body-xl-medium caption-sm-medium">
                      {address.roadAddr}
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="desktop:gap-x-1 laptop:gap-x-1 tablet:gap-x-1 flex gap-x-[2px]">
                        <div className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium desktop:px-1 laptop:px-1 tablet:px-1 w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                          지번
                        </div>
                        <div className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium text-neutral-400">
                          {address.jibunAddr}
                        </div>
                      </div>
                      <div className="flex items-center gap-x-[2px]">
                        <div className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium desktop:px-1 laptop:px-1 tablet:px-1 w-fit rounded-[1.3px] border border-neutral-300 px-[2.68px] text-neutral-400">
                          우편번호
                        </div>
                        <p className="desktop:body-md-regular laptop:body-md-regular tablet:body-md-regular caption-sm-medium text-neutral-400">
                          {address.zipNo}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (editMyInfoData) {
                        setEditMyInfoData({
                          ...editMyInfoData,
                          editMyInfoData: {
                            ...editMyInfoData,
                            address: address.roadAddr,
                          },
                        })
                      } else {
                        setAddressState({
                          ...signUpData,
                          signUpData: { ...signUpData, address: address.roadAddr },
                        })
                      }
                    }}
                    className="desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-sm-medium desktop:h-[28px] laptop:h-[28px] tablet:h-[28px] desktop:rounded-[4px] laptop:rounded-[4px] tablet:rounded-[4px] desktop:px-[10px] laptop:px-[10px] tablet:px-[10px] h-[24px] cursor-pointer rounded-[2px] bg-purple-200 px-[6px] whitespace-nowrap"
                  >
                    선택
                  </button>
                </div>
              ))
            ) : (
              <div className="mt-6 flex flex-col gap-y-2">
                <p className="desktop:body-2xl-semibold laptop:body-2xl-semibold tablet:body-2xl-semibold caption-md-semibold text-purple-500">
                  이렇게 검색하면 좋아요
                </p>
                <div className="flex flex-col gap-y-1">
                  <div className="flex flex-col">
                    <p className="desktop:body-lg-medium laptop:body-lg-medium tablet:body-lg-medium caption-sm-medium text-neutral-800">
                      도로명 + 건물번호
                    </p>
                    <p className="desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-md-medium text-neutral-400">
                      예) 양재대로 1300, 왕십리로 222
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="desktop:body-lg-medium laptop:body-lg-medium tablet:body-lg-medium caption-sm-medium text-neutral-800">
                      동/읍/면리 + 번지
                    </p>
                    <p className="desktop:body-md-medium laptop:body-md-medium tablet:body-md-medium caption-md-medium text-neutral-400">
                      예) 백현동 532, 정자동 178-4
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="fixed bottom-[30px] left-1/2 flex -translate-x-1/2 flex-col items-center justify-center">
        {formComplete ? (
          <AnimatedSpeechBubble floatingType="gentle">
            <p className="desktop:caption-md-medium laptop:caption-md-medium tablet:caption-md-medium text-purple-500">
              프로필 정보에 맞는 맞춤 공고로 이동해요
            </p>
          </AnimatedSpeechBubble>
        ) : null}

        <button
          className={`desktop:h-[48px] desktop:w-[96px] laptop:h-[48px] laptop:w-[96px] tablet:h-[48px] tablet:w-[96px] desktop:body-lg-semibold laptop:body-lg-semibold tablet:body-lg-semibold mt-5 flex h-[36px] w-[55px] items-center justify-center rounded-[6px] text-white transition-colors ${
            formComplete
              ? 'cursor-pointer bg-purple-500 hover:bg-purple-600'
              : 'cursor-not-allowed bg-neutral-400'
          }`}
          disabled={!formComplete}
          onClick={async () => {
            if (formComplete) {
              try {
                // API 호출
                if (editMyInfoData) {
                  const response = await patchUsersMyPage(editMyInfoData)
                  console.log('회원 정보 수정', response)
                } else {
                  if (signUpData) {
                    const response = await postOnboardingSignUp(signUpData)
                    console.log('회원가입 성공:', response)
                  }
                }
                nav('/job')
                // 성공 시 추가 처리 (예: 페이지 이동, 성공 메시지 등)
                // 예: navigate('/success') 또는 다른 성공 처리 로직
              } catch (error) {
                console.error('회원가입 실패:', error)
                // 에러 처리 (예: 에러 메시지 표시)
              }
            }
          }}
        >
          완료
        </button>
      </div>
    </div>
  )
}
