/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CameraService } from "../camera.service";
import { CameraCreateInput } from "./CameraCreateInput";
import { Camera } from "./Camera";
import { CameraFindManyArgs } from "./CameraFindManyArgs";
import { CameraWhereUniqueInput } from "./CameraWhereUniqueInput";
import { CameraUpdateInput } from "./CameraUpdateInput";

export class CameraControllerBase {
  constructor(protected readonly service: CameraService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Camera })
  async createCamera(@common.Body() data: CameraCreateInput): Promise<Camera> {
    return await this.service.createCamera({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Camera] })
  @ApiNestedQuery(CameraFindManyArgs)
  async cameras(@common.Req() request: Request): Promise<Camera[]> {
    const args = plainToClass(CameraFindManyArgs, request.query);
    return this.service.cameras({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Camera })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async camera(
    @common.Param() params: CameraWhereUniqueInput
  ): Promise<Camera | null> {
    const result = await this.service.camera({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Camera })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCamera(
    @common.Param() params: CameraWhereUniqueInput,
    @common.Body() data: CameraUpdateInput
  ): Promise<Camera | null> {
    try {
      return await this.service.updateCamera({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Camera })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCamera(
    @common.Param() params: CameraWhereUniqueInput
  ): Promise<Camera | null> {
    try {
      return await this.service.deleteCamera({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
