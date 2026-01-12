
import { describe, expect, test, vi } from "vitest";
import useGifs from "./useGifs";
import { act, renderHook } from "@testing-library/react";

describe('useGifs', () => {



    test('debe retornar los valores y metodos defaul', async () => {

        const { result } = renderHook(() => useGifs())

        expect(result.current.gifStickers.length).toBe(0)
        expect(result.current.dataHistorial.length).toBe(0)
        expect(result.current.handleSearch).toBeDefined()
        expect(result.current.handleOnLabelClick).toBeDefined()


    })

    test('debe retornar una lista de gif', async () => {

        const { result } = renderHook(() => useGifs())

        await act(async () => {
            await result.current.handleSearch('goku')

        })


        expect(result.current.gifStickers.length).toBe(20)
    })

    test('debe dar una lista de gif cuando das click en handleOnLabelClick', async () => {

        const { result } = renderHook(() => useGifs())

        await act(async () => {
            await result.current.handleOnLabelClick('saitama')

        })

        expect(result.current.gifStickers.length).toBe(20)

    })
})