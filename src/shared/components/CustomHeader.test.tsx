import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {

    const titleTest = 'test title'
    const descriptionTest = 'description test'

    test('render title', () => {
        render(<CustomHeader title={titleTest} />)

        screen.debug();
        expect(screen.getByText(titleTest)).toBeDefined();
    })

    test('render describtion when provider', () => {
        render(<CustomHeader title={titleTest} descipsion={descriptionTest} />)

        screen.debug();
        expect(screen.getByText(descriptionTest)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML.trim()).toBe(descriptionTest);
    })

    test('not render describtion when not provider', () => {

        const { container } = render(<CustomHeader title={titleTest} />)

        screen.debug();

        const div = container.querySelector('.content-center')

        const h1 = div?.querySelector('h1')

        const p = div?.querySelector('p')

        expect(h1?.innerHTML).toBe(titleTest)
        expect(p?.innerHTML).not.toBeDefined();
        expect(p).toBeNull();  //esta funciona como la de arriba

    })
})